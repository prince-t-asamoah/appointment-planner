import React from "react";

export const Tile = ({tile, listNo, type}) => {

    const formatTime = (time) => {
      let [hours, minutes] = time.split(":");
      let meridian;
      if (hours > 12) {
        meridian = "PM";
        hours -= 12;
      } else if (hours < 12) {
        meridian = "AM";
        if (hours === 0) hours = 12;
      } else {
        meridian = 'PM';
      }
      return `${hours}:${minutes} ${meridian}`;
    };

    const formatDate = (date) => {
      return date.split("-").reverse().join("-");
    }
    
    return (
      <>
        {type === "appointments" && (
          <tr className="tile-container">
            <td className="tile">{listNo + 1}</td>
            <td className="tile">{tile.title}</td>
            <td className="tile">{formatDate(tile.date)}</td>
            <td className="tile">{formatTime(tile.time)}</td>
            <td className="tile">{tile.contact.name}</td>
            <td className="tile">{tile.contact.phone}</td>
            <td className="tile">{tile.contact.email}</td>
          </tr>
        )}
        {type === "contacts" && (
          <tr className="tile-container">
            <td className="tile">{listNo + 1}</td>
            <td className="tile">{tile.name}</td>
            <td className="tile">{tile.phone}</td>
            <td className="tile">{tile.email}</td>
          </tr>
        )}
      </>
    );
};
