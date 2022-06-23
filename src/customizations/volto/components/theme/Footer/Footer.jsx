/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, Grid, Image, List, Segment } from 'semantic-ui-react';

import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';
import logoInstagram from '@itonboard/volto-itonboard-theme/images/instagram.svg';
import logoFacebook from '@itonboard/volto-itonboard-theme/images/facebook.svg';
import logoTwitter from '@itonboard/volto-itonboard-theme/images/twitter.svg';
import logoYoutube from '@itonboard/volto-itonboard-theme/images/youtube.svg';
import logoXing from '@itonboard/volto-itonboard-theme/images/xing.svg';
import logoLinkedin from '@itonboard/volto-itonboard-theme/images/linkedin.svg';
import logoErasmus from '@itonboard/volto-itonboard-theme/images/erasmus.jpg';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  const { settings } = config;
  const lang = useSelector((state) => state.intl.locale);
  return (
    <Segment role="contentinfo" vertical padded textAlign="center" id="footer">
      <Container>
        <Segment basic textAlign="left">
          <Grid columns={3} stackable>
            <Grid.Column>
              <List>
                <List.Item className="header">
                  <FormattedMessage id="Shortcuts" defaultMessage="Shortcuts" />
                </List.Item>
                <List.Item>
                  <UniversalLink
                    href={
                      settings.isMultilingual
                        ? `/${lang}/contact-form`
                        : '/contact-form'
                    }
                  >
                    <FormattedMessage id="Contact" defaultMessage="Contact" />
                  </UniversalLink>
                </List.Item>
                <List.Item>
                  <UniversalLink
                    href={
                      settings.isMultilingual ? `/${lang}/sitemap` : '/sitemap'
                    }
                  >
                    <FormattedMessage id="Site Map" defaultMessage="Site Map" />
                  </UniversalLink>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List divided>
                <List.Header>
                  <FormattedMessage
                    id="Legal Information"
                    defaultMessage="Legal Information"
                  />
                </List.Header>
                <List.Content>
                  <List.Item>
                    <UniversalLink
                      href={
                        settings.isMultilingual
                          ? `/${lang}/imprint`
                          : '/imprint'
                      }
                    >
                      <FormattedMessage id="Imprint" defaultMessage="Imprint" />
                    </UniversalLink>
                  </List.Item>
                  <List.Item>
                    <UniversalLink
                      href={
                        settings.isMultilingual
                          ? `/${lang}/privacy`
                          : '/privacy'
                      }
                    >
                      <FormattedMessage
                        id="Privacy Policy"
                        defaultMessage="Privacy Policy"
                      />
                    </UniversalLink>
                  </List.Item>
                </List.Content>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>
                  <Image
                    src={logoErasmus}
                    alt="With the support of the Erasmus+ Programme of the Euroepean Union"
                    title="With the support of the Erasmus+ Programme of the European Union"
                  />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment basic className="partner-logos" textAlign="left">
          <Image
            src={logoInstagram}
            size="mini"
            as="a"
            href="https://www.instagram.com/itonboard/"
            target="_blank"
            alt="Instagram"
            title="Instagram"
          />
          <Image
            src={logoFacebook}
            size="mini"
            as="a"
            href="https://www.facebook.com/Itonboard-100536088790600/"
            target="_blank"
            alt="Facebook"
            title="Facebook"
          />
          <Image
            src={logoTwitter}
            size="mini"
            as="a"
            href="https://twitter.com/itonboard"
            target="_blank"
            alt="Twitter"
            title="Twitter"
          />
          <Image
            src={logoYoutube}
            size="mini"
            as="a"
            href="https://www.youtube.com/channel/UC3WL1HitS1M_mwrCO_R2WnQ"
            target="_blank"
            alt="YouTube"
            title="YouTube"
          />
          <Image
            src={logoXing}
            size="mini"
            as="a"
            href="https://www.xing.com/pages/itonboard"
            target="_blank"
            alt="Xing"
            title="Xing"
          />
          <Image
            src={logoLinkedin}
            size="mini"
            as="a"
            href="https://www.instagram.com/itonboard/"
            target="_blank"
            alt="LinkedIn"
            title="LinkedIn"
          />
        </Segment>
        <Segment basic textAlign="left" className="discreet">
          <FormattedMessage
            id="{copyright} ITONBOARD"
            defaultMessage="{copyright} ITONBOARD"
            values={{
              copyright: (
                <abbr title={intl.formatMessage(messages.copyright)}>©</abbr>
              ),
            }}
          />
        </Segment>
      </Container>
    </Segment>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
