import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Join a room to interact with crazy people',
    paragraph: ' The number of participants per room is limited to 25 in order to provide the best experience '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                      src={require('./../../assets/images/figure_01_image.png')}
                      alt="Features tile icon 01"
                     />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <a href='https://hubs.mozilla.com/KxUj4Fy/civa-hubs-clone-01' target='_blank'>
                  <h4 className="mt-0 mb-8">
                    Mozilla Hubs Room01
                    </h4>
                    </a>
                  <p className="m-0 text-sm">
                    Information about the state of the room
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/figure_02_image.png')}
                      alt="Features tile icon 02"
                     />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <a href='https://hubs.mozilla.com/xNtJCyg/civa-02' target='_blank'>
                  <h4 className="mt-0 mb-8">
                    Mozilla Hubs Room02
                    </h4>
                    </a>
                  <p className="m-0 text-sm">
                    Information about the state of the room
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/figure_03_image.png')}
                      alt="Features tile icon 03"
                   />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <a href='https://hubs.mozilla.com/PRrrfbE/civa-03' target='_blank'>
                  <h4 className="mt-0 mb-8">
                    Mozilla Hubs Room03
                    </h4>
                    </a>
                  <p className="m-0 text-sm">
                    Information about the state of the room
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/figure_04_image.png')}
                      alt="Features tile icon 04"
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <a href='https://hubs.mozilla.com/DDBgHfg/civa-04' target='_blank'>
                  <h4 className="mt-0 mb-8">
                    Mozilla Hubs Room04
                    </h4>
                    </a>
                  <p className="m-0 text-sm">
                    Information about the state of the room
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/figure_05_image.png')}
                      alt="Features tile icon 05"
                     />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <a href='https://hubs.mozilla.com/KxUj4Fy/civa-hubs-clone-05' target='_blank'>
                  <h4 className="mt-0 mb-8">
                    Mozilla Hubs Room05
                    </h4>
                    </a>
                  <p className="m-0 text-sm">
                    Information about the state of the room
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/figure_06_image.png')}
                      alt="Features tile icon 06"
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <a href='https://hubs.mozilla.com/KxUj4Fy/civa-hubs-clone-06' target='_blank'>
                  <h4 className="mt-0 mb-8">
                    Mozilla Hubs Room06
                    </h4>
                    </a>
                  <p className="m-0 text-sm">
                    Information about the state of the room
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;