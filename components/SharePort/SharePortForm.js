import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {ADD_POST_REQUEST} from '../../reducers/post'

const SharePortForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const {  isAddingPost, postAdded } = useSelector(state => state.post);

  useEffect(() => {
    setText('');
  }, [postAdded === true]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
     dispatch({
       type: ADD_POST_REQUEST,
       data: {
         text,
       },
     });
  }, []);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
      <Input.TextArea maxLength={140} placeholder="포트폴리오 작성하세요~" value={text} onChange={onChangeText} />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>작성</Button>
      </div>
      <div>
        
      </div>
    </Form>
  );
};

export default SharePortForm;
