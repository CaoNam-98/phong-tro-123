import React, { useEffect } from "react";
import { Sitem } from "./index";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const RelatedPost = () => {
  const { newPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getNewPosts());
  }, []);
  console.log("newPosts: ", newPosts);

  return (
    <div className="w-full bg-white rounded-md p-4">
      <h3 className="font-semibold text-lg mb-4">Tin mới đăng</h3>
      <div className="w-full flex flex-col gap-2">
        {newPosts?.map((item) => {
          return (
            <Sitem
              key={item.id}
              image={JSON.parse(item.images.image)}
              title={item.title}
              price={item.attributes.price}
              createdAt={item.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPost;
