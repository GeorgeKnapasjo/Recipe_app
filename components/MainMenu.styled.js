import styled from 'styled-components/native';
import {Link} from 'react-router-native'

export const Wrapper = styled.View`
    display:flex;
    flex-direction:row;
    width:80%;
    margin:48px auto auto auto;
    flex-wrap:wrap;
`;

export const CuisineWrapper = styled(Link)`
    height:120px;
    width:40%;
    margin:16px auto 16px auto;
    border:1px solid black;
`;