import React from "react";

const Instagram = (props) => {
    const { } = props;

    const {className} = props
    const classes = 'Instagram ' + (className || '');

    return (
      <svg className={classes} width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.86364 0C3.97669 0 0 3.97669 0 8.86364V21.1364C0 26.0233 3.97669 30 8.86364 30H21.1364C26.0233 30 30 26.0233 30 21.1364V8.86364C30 3.97669 26.0233 0 21.1364 0H8.86364ZM8.86364 1.36364H21.1364C25.2862 1.36364 28.6364 4.71376 28.6364 8.86364V21.1364C28.6364 25.2862 25.2862 28.6364 21.1364 28.6364H8.86364C4.71376 28.6364 1.36364 25.2862 1.36364 21.1364V8.86364C1.36364 4.71376 4.71376 1.36364 8.86364 1.36364ZM23.1818 5.45455C22.8202 5.45455 22.4733 5.59821 22.2176 5.85395C21.9618 6.10968 21.8182 6.45652 21.8182 6.81818C21.8182 7.17984 21.9618 7.52669 22.2176 7.78242C22.4733 8.03815 22.8202 8.18182 23.1818 8.18182C23.5435 8.18182 23.8903 8.03815 24.1461 7.78242C24.4018 7.52669 24.5455 7.17984 24.5455 6.81818C24.5455 6.45652 24.4018 6.10968 24.1461 5.85395C23.8903 5.59821 23.5435 5.45455 23.1818 5.45455ZM15 7.5C10.8659 7.5 7.5 10.8659 7.5 15C7.5 19.1341 10.8659 22.5 15 22.5C19.1341 22.5 22.5 19.1341 22.5 15C22.5 10.8659 19.1341 7.5 15 7.5ZM15 8.86364C18.3971 8.86364 21.1364 11.6029 21.1364 15C21.1364 18.3971 18.3971 21.1364 15 21.1364C11.6029 21.1364 8.86364 18.3971 8.86364 15C8.86364 11.6029 11.6029 8.86364 15 8.86364Z" />
      </svg>
    );

};

export default Instagram;