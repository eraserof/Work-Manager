export function isDev(): boolean {
    return process.env.NODE_ENV == 'development' ? true : false;
}

export const staticFolder = process.env.staticFolder;