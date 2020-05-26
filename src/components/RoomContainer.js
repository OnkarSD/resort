import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         // console.log(value);
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomsContainer;
