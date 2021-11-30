import env from '../config';
const { clientId, authUrl, baseUrl, state, redirectUri, newReleasesEndpoint, playlistsEndpoint, categoriesEndpoint } = env.api;

export class SpotifyService {
    constructor(accessToken) {
        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', `Bearer ${accessToken}`);
    }


    async getNewReleases() {
        try {
            const res = await fetch(baseUrl + newReleasesEndpoint, {
                headers: this.headers
            });
            const data = await res.json();

            if (data && data.albums && data.albums.items) {
                return data.albums.items;
            }

            return [];

        } catch (err) {
            console.error(err);
        }
    }

    async getPlaylists() {
        try {
            const res = await fetch(baseUrl + playlistsEndpoint, {
                headers: this.headers
            });
            const data = await res.json();

            if (data && data.items) {
                return data.items;
            }

            return [];
        } catch (err) {
            console.error(err);
        }
    }

    async getCategories() {
        try {
            const res = await fetch(baseUrl + categoriesEndpoint, {
                headers: this.headers
            });
            const data = await res.json();

            if (data && data.categories && data.categories.items) {
                return data.categories.items;
            }

            return [];
        } catch (err) {
            console.error(err);
        }
    }
}



export function getAuthUrl() {
    try {
        const scope = 'user-read-private user-read-email';

        return (
            authUrl
            + '?'
            + `response_type=token&`
            + `client_id=${clientId}&`
            + `scope=${scope}&`
            + `redirect_uri=${redirectUri}&`
            + `state=${state}`
        );
    } catch (err) {
        console.error(err);
    }
}
