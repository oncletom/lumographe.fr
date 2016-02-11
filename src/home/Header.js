import React, {Component} from "react";

export default class Header extends Component {
  render() {
    return ( 
      <header className="Hero">
      <div className="Hero-bgArtwork"> 
        <svg className="Hero-logo" viewBox="0 0 283 300" xmlns="http://www.w3.org/2000/svg">
          <title>logo</title>
          <g fill="none" fill-rule="evenodd">
            <circle cx="141.5" cy="155.5" r="141.5" fill="#00C3FF"/>
            <circle cx="141.5" cy="155.5" r="135.5" fill="#092A4A"/>
            <circle cx="141.5" cy="155.5" r="127.5" fill="#3C5C7C"/>
            <path d="M63.84 94.57l2.59-8.562 4.644-8.89 9.718-9.35L92.885 56.13l13.586-13.075 12.693-12.214 15.916-15.315L151.21 0l1.658 2.394-5.318 9.106-1.438 6.144 2.343 6.552 10.63 18.204 11.53 19.744 12.97 22.215 12.828 21.966 11.47 19.642 10.33 17.69 11.534 19.754 7.882 14.178 1.404 7.014-1.404 6.526-5.286 10.148-17.315 20.3-16.63 19.495-17.3 20.28-17.01 19.943h-2.422l1.224-8.784v-4.36l-.685-4.925-13.314-19.885-12.532-18.72-13.6-20.31-15.128-22.597-18.027-26.926-16.21-24.212-5.114-7.774-2.81-9.19-.914-8.575-.715-10.47zM93.265 168.928L92 166.265l-8.377 10.725-9.375 14.33-8.787 13.43-1.964 5.387v5.41l1.965 4.643 12.198 16.912 13.87 19.233 11.608 16.093 10.048 13.932-.31 13.11h1.602l11.388-15.175 8.627-11.496 8.373-11.16.738-2.678v-2.655l-1.06-3.163-11.82-16.89-9.2-13.147-10.53-15.047-10.372-14.82-10.105-14.438 2.752-9.874z" fill="#FFF"/>
          </g>
        </svg> 
      </div>
        <hgroup className="Hero-brand">
          <h1 className="Hero-title">
            Lumographe
          </h1>
          <h2 className="Hero-subtitle">
            Développement web &amp; mobile
          </h2>
        </hgroup>
        <img src="img/avatar-2x.jpg" alt="photo de l'auteur" className="Hero-avatar" />
      </header>
   );
  }
}

