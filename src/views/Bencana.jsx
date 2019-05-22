import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";


class Bencana extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    const {bencana} = this.props;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Daftar bencana terbaru</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Jenis</th>
                        <th>Magnitude</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Waktu</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        bencana && bencana.map((bencana) =>
                          <tr key={bencana.id}>
                            <td>{bencana.jenis}</td>
                            <td>{bencana.magnitude}</td>
                            <td>{bencana.lokasi.latitude}</td>
                            <td>{bencana.lokasi.longitude}</td>
                            <td>{new Date(bencana.waktu.seconds * 1000).toString()}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state);
  return{
    bencana : state.firestore.ordered.bencana
  }
}

export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
      {collection: 'bencana'}
    ])
  )(Bencana);
