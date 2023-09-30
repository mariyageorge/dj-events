import Layout from "@/components/Layout/Layout";
import { API_URL } from "../config/index";
import EventCard from "@/components/EventCard/EventCard";

const HomePage = ({ events }) => {
  // This prints the events on browser console (client side)
  console.log(events); // events - is an object here - not an array
  const eventsArray = events.events;
  return (
    <Layout>
      <div>Upcoming events</div>

      {eventsArray.length === 0 && <h3>There are no items to be shown</h3>}

      {Array.isArray(eventsArray) && eventsArray.length !== 0 &&
        eventsArray.map((evt) => <EventCard key={evt.id} evt={evt} />)}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  // This prints the 'events' on terminal (server side)
  console.log(events);
  return {
    props: {
      events,
    },
  };
};

export default HomePage;
