import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import RequestAddCommunity from '../pages/RequestAddCommunity'
import ViewItemList from '../pages/ViewItemList'
import ViewCommunityList from '../pages/ViewCommunityList'
import ViewSearchResult from '../pages/ViewSearchResult'
import ViewFavoriteItemList from '../pages/ViewFavoriteItemList'
import ViewMypage from '../pages/ViewMypage'
import ViewBiddedHistoryList from '../pages/ViewBiddedHistoryList'
import ViewBiddingHistoryList from '../pages/ViewBiddingHistoryList'
import RegistItem from '../pages/RegistItem';
import EditItem from '../pages/EditItem'
import ViewAdminPage from '../pages/ViewAdminPage'
import ViewMyInfo from '../pages/ViewMyInfo';
import ViewBidPointHistoryList from '../pages/viewBidPointHistoryList'
import ViewRequestAddCommunity from '../pages/ViewRequestAddCommunity'
import ViewItem from '../pages/ViewItem'

export default function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/requestAddCommunity' element={<RequestAddCommunity />} />
      <Route path='/viewItemList' element={<ViewItemList />} />
      <Route path="/viewCommunityList" element={<ViewCommunityList />} />
      <Route path='/viewSearchResult' element={<ViewSearchResult />} />
      <Route path='/viewFavoriteItemList' element={<ViewFavoriteItemList/>} />
      <Route path='/viewMypage' element={<ViewMypage/>} />
      <Route path='/viewBiddedHistoryList' element={<ViewBiddedHistoryList/>} />
      <Route path='/viewBiddingHistoryList' element={<ViewBiddingHistoryList/>} />
      <Route path="/registItem" element={<RegistItem />} />
      <Route path="/editItem" element={<EditItem />} />
      <Route path="/viewAdminPage" element={<ViewAdminPage />} />
      <Route path="/viewMyInfo" element={<ViewMyInfo />} />
      <Route path='viewBidPointHistoryList' element={<ViewBidPointHistoryList />} />
      <Route path="/request/:id" element={<ViewRequestAddCommunity />} /> {/* 요청 상세 페이지 */}
      <Route path='/viewItem' element={<ViewItem />} />
    </Routes>
  );
}