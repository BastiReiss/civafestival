import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'About the festival',
    paragraph: 'A festival is a place where energy is concentrated. People come together from all directions to experience together: to broaden horizons, to see new things, to hear and learn. To dive in together, to let oneself go. To network, to meet old acquaintances, to find new acquaintances. A festival is a metaphor for our social life, for our good life. Here things can be tried out. It builds on the past, shows the present, looks into the future. Here society is tried out, discussed. This is where society takes place.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  CIVA Festival
                  </div>
                <h3 className="mt-0 mb-12">
                  experience art!
                  </h3>
                <p className="m-0">
                A festival is a place where energy is concentrated. People come together from all directions to experience together: to broaden horizons, to see new things, to hear and learn. To dive in together, to let oneself go. To network, to meet old acquaintances, to find new acquaintances. A festival is a metaphor for our social life, for our good life. Here things can be tried out. It builds on the past, shows the present, looks into the future. Here society is tried out, discussed. This is where society takes place.


                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/logo01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  the experience
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                In 2020, our lives have been turned upside down. Nothing will ever be the same again. This fact is both frightening and inspiring at the same time. It leads to precarious situations, fears, stress, loneliness, insecurity. Within a short time, "rethinking" has become the slogan of the present day, covering all areas of life: Rethinking mobility, rethinking the public sphere, rethinking the world of work, rethinking relationships, rethinking theatre, rethinking support models - ourselves, life, yes: Rethinking the world.


                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/section01.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  About sound:frame
                  </div>
                <h3 className="mt-0 mb-12">
                  we are vr
                  </h3>
                <p className="m-0">
                sound:frame sees itself as a platform for networking international artists from different disciplines and presenting outstanding works. It acts as a laboratory for the new and as a breeding ground for the development of artistic, theoretical ideas and intercreative concepts.

                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/section02.jpg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;