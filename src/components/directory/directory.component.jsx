import React, {Component} from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
    state = {
        section: [
            {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            }
        ]
    }
    
    render() {
        const {section} = this.state;

        return (
            <div className='directory-menu'>
                {
                    section.map(({title, id, imageUrl, size}) => (
                        <MenuItem id={id} imageUrl={imageUrl} title={title} size={size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;