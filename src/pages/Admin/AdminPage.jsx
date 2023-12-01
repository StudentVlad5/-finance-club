import React, { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { Item, List, SLink } from 'components/Admin/Admin.styled';
import { FaRegUser } from 'react-icons/fa';
import { MdEventNote, MdLayers } from 'react-icons/md';

const AdminPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <SEO title="Administration" description="Page Administration" />
      <Section>
        <Container>
          <Title>Administration of:</Title>
          <List>
            <Item>
              <SLink to="users">
                Users
                <FaRegUser size={15} />
              </SLink>
            </Item>
            <Item>
              <SLink to="events">
                Events
                <MdEventNote size={16} />
              </SLink>
            </Item>
            <Item>
              <SLink to="packages">
                Packages
                <MdLayers size={16} />
              </SLink>
            </Item>
          </List>
        </Container>
      </Section>
    </>
  );
};

export default AdminPage;
