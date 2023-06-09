// ** React Imports
import { useState, ElementType, ChangeEvent, useEffect } from 'react'
import { useForm } from 'react-hook-form'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import { LoadingButton } from '@mui/lab'
import { useSettingController } from './controller'
import { useSettingStore } from './store'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  objectFit: 'cover',
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {
  // ** State
  const [img, setImg] = useState<any>(null)
  const settingController = useSettingController()
  const { info, imgSrc, setImgSrc, loading } = useSettingStore()

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register
  } = useForm({
    values: { ...info, logo: info?.logo_url }
  })
  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)
      reader.readAsDataURL(files[0])
      setImg(files[0])
    }
  }

  const onSubmit = (data: any) => {
    const formData = new FormData()
    formData.append('logo', img || '')
    formData.append('logo_url', img ? '' : imgSrc)
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('address', data.address)
    formData.append('phone', data.phone)
    settingController.changSettings(formData)
  }
  useEffect(() => {
    settingController.getSettings()
  }, [])

  return (
    <CardContent>
      <form onSubmit={handleSubmit(data => onSubmit(data))}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload Your Logo
                  <input
                    {...register('logo')}
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled
                  color='error'
                  variant='outlined'
                  onClick={() =>
                    setImgSrc(
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLm9MqY3S8QTzFZmZffBYbWdLc802a6tUTA&usqp=CAU'
                    )
                  }
                >
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Address' placeholder='USA' />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('name', { required: true })}
              fullWidth
              label='Name'
              placeholder='Facebook Org'
              error={!!errors?.name}
              helperText={errors?.name ? 'Name is required' : null}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('email', { required: true })}
              fullWidth
              type='email'
              label='Email'
              placeholder='johnDoe@example.com'
              error={!!errors?.email}
              helperText={errors?.email ? 'Email is required' : null}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label='Role' defaultValue='admin'>
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='author'>Author</MenuItem>
                <MenuItem value='editor'>Editor</MenuItem>
                <MenuItem value='maintainer'>Maintainer</MenuItem>
                <MenuItem value='subscriber'>Subscriber</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label='Status' defaultValue='active'>
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('address', { required: true })}
              fullWidth
              label='Address'
              placeholder='ABC Pvt. Ltd.'
              error={!!errors?.address}
              helperText={errors?.address ? 'Address is required' : null}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('phone', { required: true })}
              fullWidth
              label='Phone'
              placeholder='0382038678'
              error={!!errors?.phone}
              helperText={errors?.phone ? 'Phone is required' : null}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>Your email is not confirmed. Please check your inbox.</AlertTitle>
                <Link href='/' onClick={(e: SyntheticEvent) => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null} */}

          <Grid item xs={12}>
            <LoadingButton loading={loading} variant='contained' sx={{ marginRight: 3.5 }} type='submit'>
              Save Changes
            </LoadingButton>
            <Button onClick={() => reset()} variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
