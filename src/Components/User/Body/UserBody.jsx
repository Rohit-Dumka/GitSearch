import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaMapMarkedAlt } from "react-icons/fa";
import { Row, Col, Card } from 'react-bootstrap';
import InfoModal from '../../Shared/InfoModal/InfoModal';
import InfoModalToggler from '../../Shared/InfoModal/Toggler/InfoModalToggler';
import UserInfoModalBody from '../InfoModal/UserInfoModalBody';
import UserNavCol from '../NavCol/UserNavCol';
import './UserBody.css';

const UserBody = ({ user }) => {
  const [showingInfoModal, setShowingInfoModal] = useState(false);
  return (
    <Card className="UserBody ">
      {
        showingInfoModal && (
          <InfoModal
            title="UserControls"
            viewBody={() => <UserInfoModalBody />}
            handleHide={() => setShowingInfoModal(false)}
          />
        )
      }
      <Row noGutters>
        <Col className="PictureCol" xs={4}>
          <Card.Img className="Picture" variant="left" src={user.avatar} />
        </Col>
        <Col className="InfoCol" xs={8}>
          <Card.Body className="Body">
            <Card.Text className="Text">
              <div className="Inner">
                <Card.Title className="Title">{user.name}</Card.Title>
                <p className="Bio">{user.bio}</p>
                <Row className="NavRow mb-2">
                  <UserNavCol name="Repos" amount={user.numberOfPublicRepos} url={`/${user.login}/repos`} />
                  <UserNavCol name="Gists" amount={user.numberOfPublicGists} url={`/${user.login}/gists`} />
                  <UserNavCol name="Followers" amount={user.numberOfFollowers} url={`/${user.login}/followers`} />
                  <UserNavCol name="Following" amount={user.numberOfFollowing} url={`/${user.login}/following`} />
                  <Col className="LocationCol " xs={12}>
                    <Link
                      className="LocationLink"
                      to={{
                        pathname: `/${user.login}/location`,
                        address: user.location,
                      }}
                    >
                      <FaMapMarkedAlt  className="mr-2" />
                      {user.location}
                    </Link>
                  </Col>
                  <Col className="QuestionCol" xs={12}>
                    <InfoModalToggler handleShowInfoModal={() => setShowingInfoModal(true)} />
                  </Col>
                </Row>
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

UserBody.propTypes = {
  user: PropTypes.objectOf({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    numberOfPublicRepos: PropTypes.number.isRequired,
    numberOfPublicGists: PropTypes.number.isRequried,
    numberOfFollowers: PropTypes.number.isRequired,
    numberOfFollowing: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserBody;