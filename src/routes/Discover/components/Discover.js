import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { SpotifyService } from './../../../services/spotify';

function getParams(url) {
  const queryString = (new URL(url.replace('#', '?'))).search.slice(1);
  return queryString.split('&').map((keyVal) => keyVal.split('=')).reduce((acc, val) => ({
    ...acc,
    [val[0]]: val[1]
  }), {});
}

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount() {
    const params = getParams(document.location.toString());
    console.log(params);

    if (params && ('access_token' in params)) {
      const accessToken = params['access_token'];
      // const expires = params['expires'];

      localStorage.setItem('access_token', accessToken);

      // localstorage will not ckear it after it expires 
      // for that a cookie is needed
      // cookies don't work on localhost but this how it would hav ebeen set
      // document.cookie = `access_token=${accessToken};expires=${expires}`;

      const spotifySerice = new SpotifyService(accessToken);

      (async () => {
        try {
          const categories = await spotifySerice.getCategories();
          const newReleases = await spotifySerice.getNewReleases();
          const playlists = await spotifySerice.getPlaylists();

          if (categories && newReleases && playlists) {
            this.setState({
              categories,
              newReleases,
              playlists
            });
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }

  componentWillUnmount() {

  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
