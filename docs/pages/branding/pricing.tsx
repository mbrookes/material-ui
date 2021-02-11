import * as React from 'react';
import BrandingRoot from 'docs/src/modules/branding/BrandingRoot';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import BrandingCard from 'docs/src/modules/branding/BrandingCard';
import UnderlinedText from 'docs/src/modules/branding/UnderlinedText';
import BrandingBeginToday from 'docs/src/modules/branding/BrandingBeginToday';

const benefits = [
  {
    image: '/static/branding/pricing-ssi/fast.svg',
    color: undefined,
    description: 'Faster development process with pre-built elements.',
    order: { xs: 1, sm: 2, lg: 1 },
  },
  {
    image: '/static/branding/pricing-ssi/customizable.svg',
    color: 'info',
    description: 'Highly customisable components.',
    order: { xs: 2, sm: 1, lg: 2 },
  },
  {
    image: '/static/branding/pricing-ssi/community.svg',
    color: undefined,
    description: 'Strong community numbering 1M developers.',
    order: { xs: 3 },
  },
  {
    image: '/static/branding/pricing-ssi/documentation.svg',
    color: 'info',
    description: (
      <React.Fragment>
        Structured support documentation to help you{' '}
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' } }} />
        <Link href="/getting-started/usage/">Get started.</Link>
      </React.Fragment>
    ),
    order: { xs: 4 },
  },
];

function Benefits() {
  return (
    <Container sx={{ mt: [10, 18], mb: [12, 20] }}>
      <Typography variant="h3" component="div" sx={{ textAlign: 'center', mt: 8, mb: 6 }}>
        Benefits included with <Box sx={{ display: { xs: 'none', md: 'block' } }} />
        all the plans
      </Typography>
      <Grid container spacing={4}>
        {benefits.map((benefit) => (
          <Grid
            item
            container
            direction="column"
            xs={12}
            sm={6}
            lg={3}
            sx={{ alignItems: 'center', order: benefit.order }}
            key={benefit.image}
          >
            <Avatar
              sx={{
                mb: 2,
                bgcolor: benefit.color === 'info' ? 'vividBlue' : 'primary.main',
                width: 80,
                height: 80,
              }}
            >
              <img loading="lazy" src={benefit.image} alt="" />
            </Avatar>
            <Typography component="p" sx={{ textAlign: 'center' }}>
              {benefit.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const expectations = [
  {
    image: '/static/branding/pricing-ssi/fast.svg',
    color: 'emerald',
    title: 'Volume Discount',
    description: (
      <React.Fragment>
        The licenses are on a per-developer basis. We offer the following tiered discounts from list
        prices when purchasing more than one license for your development team:
        <ul>
          <li>
            – 2-5 Licenses: <strong>10% discount</strong>
          </li>
          <li>
            – 6-10 Licenses: <strong>15% discount</strong>
          </li>
        </ul>
        If you require more than 10 licenses, contact us by email at{' '}
        <Link href="mailto:sales@material-ui.com">sales@material-ui.com</Link>.
      </React.Fragment>
    ),
  },
  {
    image: '/static/branding/pricing-ssi/customizable.svg',
    color: 'vividBlue',
    title: 'Perpetual License',
    description: (
      <React.Fragment>
        When you purchase,{' '}
        <strong>you are granted a license to use a version of the product in perpetuity</strong>.
        There are no further charges until you choose to extend your license to cover newer
        versions.
        <br />
        <br />
        Please note that while the use of the software is perpetual, support and corrective
        maintenance are not. We do not provide issue resolution to versions older than 12 months. We
        roll bug fixes, performance enhancements, and other improvements into new releases; we don't
        patch, fix or in any way alter older versions.
      </React.Fragment>
    ),
  },
  {
    image: '/static/branding/pricing-ssi/community.svg',
    color: undefined,
    title: '1-year subscription to new versions',
    description: (
      <React.Fragment>
        When you make a purchase{' '}
        <strong>you get a subscription to license new versions for 365 days</strong>. Check the{' '}
        <Link href="https://github.com/mui-org/material-ui-x/blob/next/CHANGELOG.md">
          change log
        </Link>
        . After 1 year (or up to 5 years if you choose an extension package) you will no longer be
        allowed to use the latest versions without renewing your subscription. You can continue to
        use your licensed versions in perpetuity.
        <br />
        <br />
        Please note that while the use of the software is perpetual, support and corrective
        maintenance are not. We roll bug fixes, performance enhancements, and other improvements
        into new releases; we don't patch, fix or in any way alter older versions.
      </React.Fragment>
    ),
  },
  {
    image: '/static/branding/pricing-ssi/documentation.svg',
    color: 'emerald',
    title: 'Subscription Renewal',
    description: (
      <React.Fragment>
        At the end of your subscription period, you will no longer be able to license the latest
        versions or access support without renewing. This could range from 366 days up to a 5-year
        term.{' '}
        <strong>Renewal pricing is substantially lower than first-year subscription costs</strong>.
        <br />
        <br />
        Please note that while the use of the software is perpetual, access to new features, support
        and corrective maintenance are not. We do not provide issue resolution to versions older
        than 12 months. We roll bug fixes, performance enhancements, and other improvements into new
        releases; we don't patch, fix or in any way alter older versions.
      </React.Fragment>
    ),
  },
];

function WhatToExpect() {
  return (
    <Container sx={{ mt: [10, 18], mb: [12, 20] }}>
      <Typography variant="h2" sx={{ mb: 10 }}>
        Here's <UnderlinedText>what to expect</UnderlinedText>
        <br />
        from Material-UI
      </Typography>
      <Grid container spacing={3}>
        {expectations.map((expectation) => (
          <Grid item xs={12} md={6}>
            <BrandingCard
              color={expectation.color}
              image={expectation.image}
              title={expectation.title}
            >
              <Typography sx={{ mt: 2 }}>{expectation.description}</Typography>
            </BrandingCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default function Pricing() {
  return (
    <BrandingRoot>
      <Benefits />
      <WhatToExpect />
      <BrandingBeginToday />
    </BrandingRoot>
  );
}
