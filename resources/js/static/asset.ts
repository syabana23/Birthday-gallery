/**
 * Prefix a root-absolute asset path (e.g. `/images/birthday/x.jpeg`) with the
 * active Vite base, so media resolves under sub-path deployments such as
 * GitHub Pages project sites. Under dev or root deployments BASE_URL is `/`
 * and the path is returned unchanged.
 */
export function staticAsset(path: string): string {
    const base = import.meta.env.BASE_URL || '/';

    return `${base}${path.replace(/^\//, '')}`;
}
