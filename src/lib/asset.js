export function resolveAssetPath(path) {
  if (!path) {
    return import.meta.env.BASE_URL;
  }

  const normalizedPath = path.replace(/^\/+/, '');

  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

