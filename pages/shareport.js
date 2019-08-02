import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import SharePortList from '../components/SharePort/SharePortList';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Link from 'next/link';


/*
  @Date 2019-08-02
  @author 최성준
  @brief 포트폴리오리스트 
*/
const styles = theme => ({
  root: {
  width: "1000px",
  marginTop: theme.spacing.unit * 3,
  overflowX: "auto"
  },
  table: {
  minWidth: 100
  }
  });
  // const customers = [
  //     {
  //     'id': 1,
  //     'image': 'https://placeimg.com/48/48/4',
  //     'title' : '쇼핑몰',
  //     'name': '최성준',
  //     'createdate': '2019년07월31일'
       
  //     },
  //     {
  //     'id': 2,
  //     'image': 'https://placeimg.com/48/48/5',
  //     'title':'영화예매사이트',
  //     'name': '최성준',
  //     'createdate': '2019년07월31일'
  //     },
  //     {
  //     'id': 3,
  //     'image': 'https://placeimg.com/48/48/6',
  //     'title':'Sns사이트',
  //     'name': '최성준',
  //     'createdate': '2019년07월31일'
  //     } 
  //   ]
    
  const shareport =(props) => {
  
    
    const { mainPosts } = useSelector(state => state.post);//게시글
   
    return (
      <>
          {/* <Paper className={setstate.root}>
            <Table className={setstate.table}> */}
          <Paper >
            <Table >
              <TableHead>
                <TableRow> 
                  <TableCell>순번</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell>글쓴이</TableCell>
                  <TableCell>글쓴날짜</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {/* {customers.map(c => {
                  // return <SharePortList key={c.id} id={c.id} image={c.image} title={c.title} name={c.name} createdate={c.createdate} />
                
                  })} */}
      
                   {mainPosts.map((c) => {
                    return (
                      <SharePortList key={c} post={c} />
                    );
                  })} 
              </TableBody>
            </Table>
          </Paper>
           {/* <div align="center"><Button>글쓰기</Button></div> */}
      </>
      );
    
  };
  
  export default withStyles(styles)(shareport);
