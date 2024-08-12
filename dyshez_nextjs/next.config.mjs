/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/login', // Matched parameters can be used in the destination
            permanent: true,
          },
        ]
      },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'fxtmgsjiepkryryqzwwq.supabase.co',
            }
        ]
    }
};

export default nextConfig;
