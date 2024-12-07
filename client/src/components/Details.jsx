import { useParams } from "react-router-dom";
import EventDetails from "../pages/EventDetails";
import WorkshopDetails from "../pages/WorkshopDetails";

const Details = () => {
  const { type, eventId } = useParams();

  // Dynamically render based on `type`
  if (type === "event") {
    return <EventDetails eventId={eventId} />;
  } else if (type === "workshop") {
    return <WorkshopDetails eventId={eventId} />;
  } else {
    return <div>Invalid type specified in the URL</div>;
  }
};

export default Details;
