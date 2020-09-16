/**
 * Copyright IBM Corp. 2016, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link, Tag, TooltipIcon } from 'carbon-components-react';
import Image from 'gatsby-image';
import React from 'react';

// Placeholder image
import placeholder from './images/placeholder.svg';

// Framework icons
import angularIcon from './images/Angular.svg';
import reactIcon from './images/React.svg';
import vanillaIcon from './images/Vanilla.svg';
import vueIcon from './images/Vue.svg';

// Design asset icons
import axureIcon from './images/Axure.svg';
import figmaIcon from './images/Figma.svg';
import sketchIcon from './images/Sketch.svg';
import xdIcon from './images/XD.svg';

const frameworkIcons = {
  Angular: angularIcon,
  React: reactIcon,
  Vanilla: vanillaIcon,
  Vue: vueIcon,
};

const designAssetIcons = {
  Axure: axureIcon,
  Figma: figmaIcon,
  Sketch: sketchIcon,
  XD: xdIcon,
};

const ChartIndexListItem = React.memo(
  ({
    codeUrl,
    description,
    designAsset,
    framework,
    image,
    maintainer,
    name,
    websiteUrl,
  }) => {
    let img;

    if (image?.fluid) {
      img = (
        <Image
          className="index-image"
          alt={`Image for the ${name} chart`}
          fluid={image.fluid}
        />
      );
    } else {
      img = (
        <img
          src={placeholder}
          alt={`Placeholder image for the ${name} chart`}
        />
      );
    }

    return (
      <>
        <article className="component-index-item">
          <div className="component-index-item__image">{img}</div>
          <div className="component-index-item__content">
            <header className="component-index-item__name">{name}</header>
            <p className="component-index-item__description">{description}</p>
            <footer className="component-index-item__info">
              <div className="component-index-item__links">
                <Link
                  className="component-index-item__link"
                  href={websiteUrl}
                  rel="noopener noreferrer">
                  Docs
                </Link>
                {codeUrl && (
                  <>
                    <div className="component-index-item__divider" />
                    <Link
                      className="component-index-item__link"
                      href={codeUrl}
                      rel="noopener noreferrer">
                      Code
                    </Link>
                  </>
                )}
              </div>
              <ul className="component-index-item__tags">
                {framework && (
                  <li className="component-index-item__tag component-index-item__tag--framework">
                    <TooltipIcon direction="top" tooltipText={framework}>
                      <img
                        src={frameworkIcons[framework] || null}
                        alt={framework}
                      />
                    </TooltipIcon>
                  </li>
                )}
                {designAsset && (
                  <li className="component-index-item__tag component-index-item__tag--design-asset">
                    <TooltipIcon direction="top" tooltipText={designAsset}>
                      <img
                        src={designAssetIcons[designAsset] || null}
                        alt={designAsset}
                      />
                    </TooltipIcon>
                  </li>
                )}
                {maintainer && (
                  <li className="component-index-item__tag component-index-item__tag--maintainer">
                    <TooltipIcon direction="top" tooltipText="Maintainer">
                      <Tag>{maintainer}</Tag>
                    </TooltipIcon>
                  </li>
                )}
              </ul>
            </footer>
          </div>
        </article>
      </>
    );
  }
);

export default ChartIndexListItem;