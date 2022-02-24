import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useContext, useRef } from 'react'
import { SearchContext } from '../../../context/searchContext'
import FavoriteSectionButton from '../../atoms/FavoriteSectionButton/FavoriteSectionButton'
import Card from '../Card/Card'

const FavoriteSection = () => {
  const { favoritesBooks } = useContext(SearchContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const buttonRef = useRef()

  return (
    <>
      <FavoriteSectionButton drawerButtonRef={buttonRef} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={buttonRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favorites Books</DrawerHeader>
          <DrawerBody>
            {!favoritesBooks.length && (
              <Heading size="md" textAlign="center" color="#aaa" mt="5rem">
                No books found
              </Heading>
            )}
            {favoritesBooks?.map(card => (
              <Card mx="auto" key={card.id} cardData={card} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default FavoriteSection
