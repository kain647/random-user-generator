import React from "react";
import {
  GlobalStyle,
  Container,
  Line,
  UserPhoto,
  UserInfo,
  UserLabel,
  UserValue,
  SpriteIcon,
  SpriteContainer,
  HeaderContainer,
  LoadingContainer,
  Loading,
  Header,
  Global,
  Title,
  Subtitle
} from "./styled";

class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "",
      email: "",
      calendar: "",
      location: "",
      phone: "",
      password: "",
      active: "profile"
    };
  }

  componentDidMount() {
    this.randomApi();
  }

  randomApi = async () => {
    const api_url = await fetch(`https://randomuser.me/api/`);
    const data = await api_url.json();
    //console.log(data);
    const user = data.results[0];
    this.setState({
      ...user,
      image: user.picture.large,
      profile: user.name,
      email: user.email,
      calendar: user.dob.date,
      location: user.location.street.name,
      phone: user.phone,
      password: user.login.password
    });
  };

  render() {
    const {
      profile,
      email,
      calendar,
      location,
      phone,
      password,
      active
    } = this.state;
    const icons = [
      {
        title: "profile",
        index: 0
      },
      {
        title: "email",
        index: 1
      },
      {
        title: "calendar",
        index: 2
      },
      {
        title: "location",
        index: 3
      },
      {
        title: "phone",
        index: 4
      },
      {
        title: "password",
        index: 5
      }
    ];

    let userValue, userLabel;
    switch (active) {
      case "profile":
        userLabel = "Hi, my name is";
        userValue = `${profile.title} ${profile.first} ${profile.last}`;
        break;
      case "email":
        userLabel = "My email address is";
        userValue = email;
        break;
      case "calendar":
        const arr = new Date(calendar)
          .toDateString()
          .split(" ")
          .slice(1);
        const birthday = `${arr[0]}  ${arr[1]}, ${arr[2]}`;
        userLabel = "My birthday is";
        userValue = birthday;
        break;
      case "location":
        userLabel = "My address is";
        userValue = location;
        break;
      case "phone":
        userLabel = "My phone number is";
        userValue = phone;
        break;
      case "password":
        userLabel = "My password is";
        userValue = password;
        break;
      default:
        break;
    }

    if (!profile) {
      return (
        <LoadingContainer>
          <GlobalStyle />
          <Loading>Loading...</Loading>
        </LoadingContainer>
      );
    }

    return (
      <Global>
        <Header>
          <Title>Random User Generator</Title>
          <Subtitle>
            A free, open-source API for generating random user data. Like Lorem
            Ipsum, but for people.
          </Subtitle>
        </Header>
        <Container>
          <GlobalStyle />
          <HeaderContainer>
            <Line />
            <UserPhoto src={this.state.image} />
          </HeaderContainer>
          <UserInfo>
            <UserLabel>{userLabel}</UserLabel>
            <UserValue>{userValue}</UserValue>
          </UserInfo>
          <SpriteContainer>
            {icons.map((icon, i) => {
              const { index, title } = icon;
              return (
                <SpriteIcon
                  key={title}
                  index={index}
                  title={title}
                  active={active === title}
                  onClick={() => this.setState({ active: title })}
                />
              );
            })}
          </SpriteContainer>
        </Container>
      </Global>
    );
  }
}

export default Generator;
