import { useEffect, useState } from 'react';
import styles from "@/styles/Landing.module.css";

export default function Events_fetch (){
  const [events, setEvent] = useState([]);

//fetche data fra api når component er renderet
  useEffect(() => {
    console.log("events");
    async function fetchArtister() {
        const response = await fetch("https://xsspmvprmsitdckybuoy.supabase.co/rest/v1/upcoming_events", {
          method: "get",
          headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzc3BtdnBybXNpdGRja3lidW95Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDI0NDAwMywiZXhwIjoyMDE1ODIwMDAzfQ.geMCtASisK7KU6HnUOxum8GFwMw51Q-rs0NKgXx-mN8",
          },
        });
        // response --> json, som parses og returnere promise der resolver js objekt.
        const data = await response.json();
        setEvent(data);
    }
    fetchArtister();
  }, []);
  
  return (
    <>
      {events.map((event) => (
      <section  key={event.id}>
          <h2>{event.name}</h2>
    </section>
      ))}
  </>
  );}


 