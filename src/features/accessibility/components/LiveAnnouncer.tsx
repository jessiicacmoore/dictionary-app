import { useEffect, useState } from "react";
interface LiveAnnouncerProps {
  isLoading: boolean;
  error?: { message: string };
  data?: any;
  title?: string;
}

function LiveAnnouncer({ isLoading, error, data, title }: LiveAnnouncerProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let newMessage = "";

    if (isLoading) {
      newMessage = "Loading word details";
    } else if (error) {
      newMessage = `Error: ${error.message}`;
    } else if (data && title) {
      newMessage = `Details for the word "${title}" loaded.`;
    }

    setMessage(newMessage);
  }, [isLoading, error, data, title]);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </div>
  );
}

export default LiveAnnouncer;
