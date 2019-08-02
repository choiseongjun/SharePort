
import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
/*
  @Date 2019-08-02
  @author 최성준
  @brief 포트폴리오리스트 컴포넌트 
*/
const SharePortList=({post})=> {

    console.log(post)
        return (
                <> 
                  
                         
                            <TableRow>
                                 <TableCell>{post.id}</TableCell>
                                <TableCell><img src={post.img} alt="profile"/></TableCell>
                                {/* <Link href={`/shareportdetail/[id]?id=${post.id}`} as={`/shareportdetail/${post.id}`}><TableCell><div style={{color:'blue'}}>{post.title}</div></TableCell></Link> */}
                                <Link href={`/shareportdetail`} as={`/shareportdetail/${post.id}`}><TableCell><div style={{color:'blue'}}>{post.title}</div></TableCell></Link>
                                <TableCell>{post.User.nickname}</TableCell>
                                <TableCell>{post.createDate}</TableCell>
                            
                            </TableRow>
                       
                                      
                </>
            
        )
    
}
SharePortList.propTypes = {
    post: PropTypes.shape({
      User: PropTypes.object,
      content: PropTypes.string,
      img: PropTypes.string,
      createdAt: PropTypes.object,
    }),
  };
export default SharePortList;
