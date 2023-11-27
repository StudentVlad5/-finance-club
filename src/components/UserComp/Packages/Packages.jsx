import { ListItemsContainer, ListItems, ListItemsOfPacked, ListItemsContentWraper, SubTitleItem, UlContent, LiContent, ButtonBuy } from "components/Prices/Prices.styled";
import {useSelector} from "react-redux";
import { getUser } from "redux/auth/selectors";
import { useEffect, useState } from "react";
import { fetchData } from "services/APIservice";
import { onFetchError } from "helpers/Messages/NotifyMessages";
import { onLoaded, onLoading } from "helpers/Loader/Loader";

export const Packages = () => {
    const packages = useSelector(getUser).packages;
    const [packagesList, setPackagesList] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      (async function getData() {
        setIsLoading(true);
        try {
          const { data } = await fetchData(`/packages`);
          if (!data) {
            return onFetchError('Whoops, something went wrong');
          }
          setPackagesList(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }, []);
  
    return(
        <ListItemsContainer style={{display:"flex"}}>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {packagesList.map(it=> packages.map(item =>{
            if(it.title === item){  
                return(<ListItems key={item}>
                  <ListItemsContentWraper>
                    <ListItemsOfPacked>{it.title}</ListItemsOfPacked>
                    <SubTitleItem>{it.content}</SubTitleItem>
                       <UlContent>features
                      {it?.features.map((item, i)=>
                      <LiContent key={item + i}>{item}</LiContent>)}
                    </UlContent>
                    <ButtonBuy type='button' aria-label="Change package">Change package</ButtonBuy>
                  </ListItemsContentWraper>
                </ListItems>)}}))}
  </ListItemsContainer>
    )
}