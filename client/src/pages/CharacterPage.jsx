import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Image, Table } from 'react-bootstrap';

const images = require.context('../../../images/full', true);

export default class CharacterPage extends Component {

  render() {
    let { character } = this.props;
    let picture = images(`./${character.id}.png`)

    character.moves.sort((a,b) => (a.damage > b.damage) ? -1 : ((b.damage > a.damage) ? 1 : 0));

    return (
      <Container>
        <Row>
          <Col>
            <Image src={picture}/>
          </Col>
          <Col style={{ marginTop: "5em" }}>
            <h1>{character.name}</h1>
            <h2>Attributes</h2>
            <ul>
              <li>Weight: {character.weight}</li>
              <li>Run Speed: {character.speed}</li>

            </ul>
          </Col>
        </Row>

        <Row>
          <h2>Moves</h2>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Damage</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                character.moves.map((move, index) =>
                <tr key={move.name.trim()}>
                  <td>{index + 1}</td>
                  <td>{move.name}</td>
                  <td>{move.damage}</td>
                  <td>{move.type}</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}
