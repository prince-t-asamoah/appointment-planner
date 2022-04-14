import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({tileList, type}) => {
  return (
    <table>
      <thead>
        {type === "appointments" && (
          <tr>
            <td className="tile title">No.</td>
            <td className="tile title">Title</td>
            <td className="tile title">Date</td>
            <td className="tile title">Time</td>
            <td className="tile title">Name</td>
            <td className="tile title">Contact Number</td>
            <td className="tile title">Email</td>
          </tr>
        )}
        {type === "contacts" && (
          <tr>
            <td className="tile title">No.</td>
            <td className="tile title">Full Name</td>
            <td className="tile title">Contact Number</td>
            <td className="tile title">Email</td>
          </tr>
        )}
      </thead>
      <tbody>
        {tileList.map((tile, index) => {
          return <Tile tile={tile} key={index} listNo={index} type={type} />;
        })}
      </tbody>
    </table>
  );
};
