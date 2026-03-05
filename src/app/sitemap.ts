import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { servicesData } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/team',
        '/gallery',
        '/documents',
        '/video',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes
    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...serviceRoutes];
}
