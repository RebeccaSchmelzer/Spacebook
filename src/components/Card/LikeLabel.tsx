import React, {FC} from 'react';
import {Image} from '../../types/image';

interface LikeLabelProps {
  picture: Image;
}

const LikeLabel: FC<LikeLabelProps> = ({picture}) => {
  const otherLabel = picture.likes - 1 > 1 ? 'others' : 'other';

  return (
    <p>
      Liked by <a href="/randomUser">hummingbird</a> and
      <a data-testid="like-label" href="/likes">
        {' '}
        {picture.likes} {otherLabel}
      </a>
    </p>
  );
};

export default LikeLabel;