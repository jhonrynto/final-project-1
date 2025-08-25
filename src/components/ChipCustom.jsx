import { Chip } from "@mui/material";

export default function ChipCustom({ data }) {
  return (
    <Chip
      label={data.status}
      sx={{
        background:
          data.status === "Booked"
            ? "#FF802F"
            : data.status === "Paid"
            ? "#0d6d55ff"
            : "#FF3D71",
        color: "white",
      }}
    />
  );
}
