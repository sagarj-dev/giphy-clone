import React from "react";
import GifCard from "../Common/GifCard";
import Spinner from "../Common/Spinner";
import Layout from "../Layout/Layout";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { SearchLoadData } from "../../store/data-slice/data-actions";
import { useParams } from "react-router-dom";
export default function Category() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.data.data);

  const { cat } = useParams();

  React.useEffect(() => {
    if (cat) {
      dispatch(SearchLoadData({ q: cat, offset: 0 }));
    }
  }, [cat]);

  return (
    <Layout>
      <Box
        display="grid"
        gap={2}
        sx={{
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          },
        }}
      >
        {data.length > 0 && data.map((d) => <GifCard data={d} key={d.id} />)}
      </Box>
    </Layout>
  );
}
