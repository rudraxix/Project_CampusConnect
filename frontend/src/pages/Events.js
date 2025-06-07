import React from 'react';
import styled from 'styled-components';

const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const EventCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const EventContent = styled.div`
  padding: 1.5rem;
`;

const EventTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const EventInfo = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1.25rem;
  }
`;

const JoinButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #4338CA;
  }
`;

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Tech Hackathon 2024',
      date: '2024-02-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Auditorium',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 2,
      title: 'Career Fair',
      date: '2024-02-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Student Center',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 3,
      title: 'Workshop: Web Development',
      date: '2024-02-25',
      time: '2:00 PM - 5:00 PM',
      location: 'Lab 101',
      image: 'https://via.placeholder.com/400x200'
    }
  ];

  const handleJoin = (eventId) => {
    console.log(`Joining event ${eventId}`);
    // Add your event joining logic here
  };

  return (
    <EventsContainer>
      <Title>Upcoming Events</Title>
      <EventGrid>
        {events.map(event => (
          <EventCard key={event.id}>
            <EventImage src={event.image} alt={event.title} />
            <EventContent>
              <EventTitle>{event.title}</EventTitle>
              <EventInfo>📅 {event.date}</EventInfo>
              <EventInfo>⏰ {event.time}</EventInfo>
              <EventInfo>📍 {event.location}</EventInfo>
              <JoinButton onClick={() => handleJoin(event.id)}>
                Join Event
              </JoinButton>
            </EventContent>
          </EventCard>
        ))}
      </EventGrid>
    </EventsContainer>
  );
};

export default Events;