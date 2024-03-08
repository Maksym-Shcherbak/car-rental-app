import { AdvertListItem } from "../../components/AdvertsListItem/AdvertsListItem";
import { Modal } from "../../components/Modal/Modal";

const FavoritePage = () => {
  return (
    <div>
      <Modal children={<AdvertListItem />} />
    </div>
  );
};

export default FavoritePage;
