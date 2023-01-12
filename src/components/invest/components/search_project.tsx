import { CircularProgress, Popper } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Box } from "@mui/system";
import { SearchOption } from "./search_option";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import { ProjectGql } from "../../../gql/graphql";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { slugify } from "../../../utils/string.util";

export const Search = styled(Autocomplete)(({ theme }) => ({
  width: 290,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export const SearchProject = ({ searchProject }: { searchProject: ({ search }: { search: any }) => Promise<any> }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [searchLoading, setSearchLoading] = React.useState(false);
  const [options, setOptions] = React.useState<readonly ProjectGql[]>([]);
  const router = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetch = React.useCallback(
    debounce((inputValue: string) => {
      searchProject({ search: inputValue }).then((res) => setOptions(res.data?.getProjects ?? []));
      setSearchLoading(false);
    }, 500),
    [],
  );
  React.useEffect(() => {
    setSearchLoading(true);
    if (!inputValue) {
      setOptions([]);
      setSearchLoading(false);
      return;
    }
    fetch(inputValue);
  }, [inputValue]);
  return (
    <Search
      fullWidth
      autoComplete={false}
      // disablePortal
      freeSolo
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(e, value: any) => {
        if (value?.id) {
          router.push(`/invest/${slugify(value.title)}.${value.id}`);
        }
      }}
      PopperComponent={(prop) => (
        <Popper {...prop} sx={{ width: { xs: "auto", sm: "500px !important" } }} placement={"bottom-start"} />
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={"filled"}
          InputProps={{
            ...params.InputProps,
            startAdornment: <img src={"/assets/imgs/invest/icons/search.svg"} style={{ marginRight: 12 }} />,
            style: {
              padding: 0,
              paddingLeft: 12,
              height: 40,
            },
            endAdornment: (
              <React.Fragment>
                {searchLoading ? <CircularProgress color="inherit" size={12} sx={{ mr: 2 }} /> : null}
                {/*{params.InputProps.endAdornment}*/}
              </React.Fragment>
            ),
          }}
          placeholder={"Tìm kiếm dự án bạn quan tâm"}
        />
      )}
      options={options}
      getOptionLabel={(option: any) => option?.title ?? inputValue}
      renderOption={(props, option) => (
        // @ts-ignore
        <Box p={1} {...props}>
          {/* @ts-ignore */}
          <SearchOption data={option} />
        </Box>
      )}
    />
  );
};
