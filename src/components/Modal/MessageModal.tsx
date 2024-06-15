import { Close } from '@/assets/icons'
import { Modal, ModalOverlay, ModalContent, ModalBody, Icon, Flex, Box } from '@chakra-ui/react'
import AppText from '../app-text'

type Props = {
  isOpen: boolean
  onClose: () => void
  allow?: boolean
  children: React.ReactNode
  size?: string
  icon?: any
  width?: any
  text?: string
}

const MessageModal = ({ width, isOpen, text, onClose, children, allow = true, size }: Props) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent width={width} mx={3}>
        <ModalBody p={'1.5rem'} textAlign={'left'}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Box>
              <AppText variant={'sm'}>{text}</AppText>
            </Box>
            {allow && (
              <Box>
                <Icon boxSize={'.9rem'} cursor={'pointer'} as={Close} onClick={onClose} />
              </Box>
            )}
          </Flex>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MessageModal
