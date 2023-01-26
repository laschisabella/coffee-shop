import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
` 

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.5rem 0.7rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.1s;

  &:disabled{
    cursor:not-allowed;
    color:gray;
  }
`

export const LocationButton = styled(BaseButton)`
  background: var(--purple-light);
`

export const ShoppingCartButton = styled(BaseButton)`
  color: var(--yellow-dark);
  background: var(--yellow-light);
  width: 2.8rem;
  &:hover{
    color: var(--yellow-light);
    background:var(--yellow-dark);
  }
`

export const Badge = styled.div`
	font-size: 0.75rem;
	background: var(--yellow-dark);
	padding: 3px 7px;
	border-radius: 12px;
  color:#fff;
  margin:0;
  position: relative;
  top: -15px;
  right: 8px;
`