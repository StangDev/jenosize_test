import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  FormGroup,
  Input,
  NavLink
} from 'reactstrap';
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setPlace } from '../../redux/stores'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.setPlace(e.target.value)
    }
  }
console.log(props);

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md" className="nav-shadow">
        <NavbarBrand  href="/">Jenosize</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <Link href="/MathTest/" as="/MathTest" >
                <NavLink>MathTest</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/Math24/" as="/Math24">
                <NavLink>Math24</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/JonosizeMap/" as="/JonosizeMap">
                <NavLink>Jenosize Map</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <FormGroup>
        <Input
          type="search"
          name="search"
          id="Search"
          placeholder="search"
          onKeyDown={_handleKeyDown}
          // value={keyword}
          // onChange={(e) => keyword({keyword:e.target.value}) }
        />
      </FormGroup>
        </Collapse>
      </Navbar>
    </div>
  );
}
const mapStateToProps = (state) => ({
  dataInput: state.input
})
const mapDispatchToProps = dispatch => ({
  setPlace: bindActionCreators(setPlace, dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)