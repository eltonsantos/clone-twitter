import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Elton Santos</h1>
        <h2>@eltin182</h2>

        <p>
          Developer at <a href="https://www.cagece.com.br">@Cagece</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 09 de junho de 1988
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />

    </Container>
  );
}

export default ProfilePage;