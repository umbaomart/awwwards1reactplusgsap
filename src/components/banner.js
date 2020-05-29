import React from 'react';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';
import '../styles/components/banner.scss';

const Banner = ({ title }) => {
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <h2 ref={title}>
                        <div className="line">
                            <span>Creating unique brands is</span>
                        </div>
                        <div className="line">
                            <span>what we do</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <a href="/">
                            More about us <RightArrow />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;