import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

// @ts-ignore - d3-geo loaded via import map / CDN
import * as d3GeoModule from 'd3-geo';

const MapErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

type PathData = {
  d: string;
  id?: string | number;
  name?: string;
};

const NigeriaMap: React.FC = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [stateData, setStateData] = useState<any>(null);
  const [paths, setPaths] = useState<PathData[]>([]);
  const [statePaths, setStatePaths] = useState<PathData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const projectionRef = useRef<any>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const d3Geo: any = d3GeoModule.default || d3GeoModule;

  useEffect(() => {
    if (!d3Geo || !d3Geo.geoMercator || !d3Geo.geoPath) {
      setError('d3-geo functions not available');
      return;
    }

    // Load GeoJSON data
    fetch('/ng.json')
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.features || !Array.isArray(data.features)) {
          console.error('Invalid GeoJSON data');
          return;
        }

        try {
          setGeoData(data);

          // Create projection centered on Nigeria
          const width = 600;
          const height = 500;
          const proj = d3Geo
            .geoMercator()
            .center([8, 9])
            .scale(2800)
            .translate([width / 2, height / 2]);

          // Test the projection
          const testPoint = proj([8, 9]);
          if (
            !testPoint ||
            testPoint.length < 2 ||
            !Number.isFinite(testPoint[0]) ||
            !Number.isFinite(testPoint[1])
          ) {
            console.error('Projection test failed');
            return;
          }

          projectionRef.current = proj;

          const pathGenerator = d3Geo.geoPath().projection(proj);
          const pathStrings: PathData[] = data.features
            .map((feature: any) => {
              try {
                if (!feature || !feature.geometry) return null;
                const d = pathGenerator(feature);
                return d ? { d, id: feature.id } : null;
              } catch (err) {
                console.warn('Error generating path for feature:', err);
                return null;
              }
            })
            .filter(Boolean) as PathData[];

          setPaths(pathStrings);

          // Try to load state boundaries from local file first, then try public source
          Promise.race([
            fetch('/ng-states.json').then((res) => (res.ok ? res.json() : null)),
            fetch(
              'https://raw.githubusercontent.com/temikeezy/nigeria-geojson-data/main/geojson/states.geojson',
            )
              .then((res) => (res.ok ? res.json() : null))
              .catch(() => null),
          ])
            .then((stateGeoData) => {
              if (stateGeoData && stateGeoData.features) {
                setStateData(stateGeoData);
                const statePathStrings: PathData[] = stateGeoData.features
                  .map((feature: any) => {
                    try {
                      if (!feature || !feature.geometry) return null;
                      const d = pathGenerator(feature);
                      return d
                        ? {
                            d,
                            id: feature.id,
                            name:
                              feature.properties?.name || feature.properties?.NAME || '',
                          }
                        : null;
                    } catch (err) {
                      console.warn('Error generating state path:', err);
                      return null;
                    }
                  })
                  .filter(Boolean) as PathData[];
                setStatePaths(statePathStrings);
              }
              setIsReady(true);
            })
            .catch(() => {
              setIsReady(true);
            });
        } catch (err) {
          console.error('Error processing map data:', err);
          setError('Failed to process map data');
        }
      })
      .catch((err) => {
        console.error('Error loading GeoJSON:', err);
        setError('Failed to load map data');
      });
  }, [d3Geo]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400 text-sm">Map unavailable</div>
      </div>
    );
  }

  if (!d3Geo || !isReady || paths.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-400 text-sm">Loading map...</div>
      </div>
    );
  }

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 500"
      className="w-full h-full drop-shadow-[0_0_30px_rgba(72,192,163,0.3)]"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#006838" />
          <stop offset="100%" stopColor="#0B251C" />
        </linearGradient>
      </defs>

      {/* Render Nigeria map paths (country outline) */}
      {paths.map((path, i) => (
        <motion.path
          key={path.id || i}
          d={path.d}
          fill="url(#mapGradient)"
          stroke="#48C0A3"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
        />
      ))}

      {/* Render state boundaries */}
      {statePaths.map((path, i) => (
        <path
          key={`state-${path.id || i}`}
          d={path.d}
          fill="none"
          stroke="#48C0A3"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          strokeDasharray="2,2"
        />
      ))}
    </svg>
  );
};

const MapSection: React.FC = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'radial-gradient(#48C0A3 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    ></div>

    <div className="container mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            style={{
              WebkitTextStroke: '1px rgba(5, 31, 26, 0.05)',
              color: 'transparent',
            }}
            className="text-[12rem] leading-none font-bold select-none absolute -top-20 -left-10 z-0 font-sans"
          >
            35
          </motion.div>
          <div className="relative z-10">
            <div className="text-8xl font-bold text-brand-accent mb-2 font-sans">35</div>
            <div className="text-2xl font-medium mb-6 text-brand-dark font-sans">
              States Covered
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg font-sans">
              Collectively, off-grid renewable energy projects located in 35 states across the
              six geo-political zones in Nigeria have been approved for co-financing by the
              Facility.
            </p>
            <button className="bg-brand-accent text-brand-dark px-8 py-4 rounded-full hover:bg-brand-dark hover:text-white transition-all font-bold flex items-center gap-2 shadow-lg shadow-brand-accent/20 font-sans">
              View All Locations <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="lg:w-2/3 relative w-full aspect-[4/3] flex items-center justify-center">
          <MapErrorBoundary>
            <NigeriaMap />
          </MapErrorBoundary>
        </div>
      </div>
    </div>
  </section>
);

export default MapSection;


