import React ,{useState} from 'react';
import {getPhotoPlaceGoogleService} from '../service'

const CardPlaceList = (props) => {
    const _getPhoto = (e) => {
        if(e){
            
            return getPhotoPlaceGoogleService(e[0].photo_reference)
            
            
        }else{
                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX09PTNzc3Kysr19fXPz8/n5+fW1tbs7Oze3t7j4+Pv7+/b29vm5ubS0tL4+Pjx8fFlEOM2AAACRUlEQVR4nO3c4W6zIBhAYQWGlg69/7tda/d1gBg3QwIv33l+2pXk5HWtWtthAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqnS6kdckCvH6WsTTbqWZUzN5iob2osR93aS9SmYOA4mvYKh5IjfAxxrd2zs1JIIYXVUfg/FypjrVfJ0zsqVHf3PNZe5/j5/RSaaXkdvejV91nogqOz8Livl0L1GQRqFyzRS6FfwiX0vbvC5BxJTz9r9FI4JedI/RW6eI2lv8Jkhrq/ws+40HVXONr4tXQO4jspVC4aYvhIJ4WjD67+LsHbYT+Fox2+E7W+hyv0Uziaj+06/jLZaAE5hT67NWrx8+02e6nnh36YfjHH9PRXUKF//Hv9JjETLaPQPF9GwuPp3gr963Xy0hRFFPr3G8GFRAmFZni/mV/YUQUU+vDBv0+x/UI/JKfvByH2YLrNF5ohOXvP76hqXg4+Om690KeB+Sk+Ao8+HW+8MBOYS3zdj5BPbLtQ5QL3O+pzgtv2XGLjhUv+T+Ip/gt8nBhmEmUWRonhLTOZKQotDHbUnwlu23eJUgvfU4wDMzuq2MLvxDRwP0W5hduOmrttLUkUXPhM3E1w2x4lSi4ctMvfsyboauJJ4ZHwkjeFNVB4jsLaKDxHYW0UnhNVeOmrQIucwtFe4+UUFkBhBRRSSGF9FMovLP39w9o5e/r87qe/sO19h1S7ooUHVxyr0s6aUmyLgdvvDRRbqdBCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkOoLoXslOD05IZkAAAAASUVORK5CYII=" 
        }
       
      }
    return (
        <div>
            {props.data.map(item => {
                return (
                      <article className="blog-card mb-3" key={item.id}>
                        <img className="post-image" src={_getPhoto(item.photos)} />
                        <div className="article-details">
                          <h3 className="post-title">{ item.name }</h3>
                          <p className="post-description">{ item.vicinity }</p>
                          <p className="post-types">{ item.types }</p>
                        </div>
                      </article>
                )
            })}
            </div>
      );
    }
export default CardPlaceList


