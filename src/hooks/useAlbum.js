import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export const useAlbum = (contract) => {
  console.log("inside UseAlbum");
  const { token } = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();
  console.log("inside UseAlbum:", token);

  const [albumDetails, setAlbumDetails] = useState();

  useEffect(() => {
    if (isInitialized && contract) {
      console.log("contract:", contract);
      fetchAlbum().then((songs) => {
        setAlbumDetails(songs.result);
      });
    }
  }, [isInitialized, contract]);

  const fetchAlbum = async () => {
    console.log("token before:", contract);
    const result = await token.getAllTokenIds({
      address: contract,
      chain: "mumbai",
    });
    console.log("result::", result);
    return result;
  };

  return { fetchAlbum, albumDetails };
};
