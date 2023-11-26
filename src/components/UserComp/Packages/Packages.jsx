import { ListItemsContainer, ListItems, ListItemsOfPacked, ListItemsContentWraper, SubTitleItem, UlContent, LiContent, ButtonBuy } from "components/Prices/Prices.styled";
import {useSelector} from "react-redux";
import { getUser } from "redux/auth/selectors";
import { data } from "components/Prices/Prices";

export const Packages = () => {
    const packages = useSelector(getUser).packages;
    return(
        <ListItemsContainer style={{display:"flex"}}>
        {data.map(it=> packages.map(item =>{
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