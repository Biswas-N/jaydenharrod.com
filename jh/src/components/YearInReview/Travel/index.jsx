import React from 'react';
import { HeadingOne } from '../../../shared/typography';
import { Row } from '../../../shared/layout';
import { Card } from '../../../shared/card';
import TopCitiesBox from './TopCitiesBox';
import MetricBox from '../../../shared/metricbox';
import sydney from './cities/sydney.jpg';
import newcastle from './cities/newcastle.jpg';
import bowral from './cities/bowral.jpg';
import cairns from './cities/cairns.jpg';
import airliebeach from './cities/airliebeach.jpg';
import mtsampson from './cities/mtsampson.jpg';
import brisbane from './cities/brisbane.jpg';
import wingham from './cities/wingham.jpg';
import clovelly from './cities/clovelly.jpg';
import gloucester from './cities/gloucester.jpg';

const Travel = () => {
  return (
    <>
      <div id="travel" />
      <HeadingOne center mb="2rem" mt="2rem">
        <span role="img" aria-label="related-emoji">
          ✈️
        </span>{' '}
        Travel{' '}
        <span role="img" aria-label="related-emoji">
          ✈️
        </span>
      </HeadingOne>

      <Card header title="Most Visited" pl="2rem" pb={0}>
        <Row justifyContent="center">
          <TopCitiesBox city="Sydney" src={sydney} />
          <TopCitiesBox city="Newcastle" src={newcastle} />
          <TopCitiesBox city="Bowral" src={bowral} />
          <TopCitiesBox city="Gloucester" src={gloucester} />
          <TopCitiesBox city="Wingham" src={wingham} />
          <TopCitiesBox city="Brisbane" src={brisbane} />
          <TopCitiesBox city="Cairns" src={cairns} />
          <TopCitiesBox city="Airlie Beach" src={airliebeach} />
          <TopCitiesBox city="Mount Sampson" src={mtsampson} />
          <TopCitiesBox city="Clovelly" src={clovelly} />
        </Row>
      </Card>
      <Card header title="All-time" pl="1rem">
        <Row justifyContent="center" mt="0.5rem" mb={0}>
          <MetricBox title="COUNTRIES" metric="6" />
          <MetricBox title="CITIES" metric="128" />
          <MetricBox title="PLACES" metric="375" />
          <MetricBox title="DISTANCE" metric="537,855" />
        </Row>
      </Card>
    </>
  );
};

export default Travel;
