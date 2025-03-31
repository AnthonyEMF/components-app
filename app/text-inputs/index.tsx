import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

// Determinar plataforma
const isIOS = Platform.OS === 'ios';

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    // Corregir problema para iphone
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}> 
      <ScrollView>
        <ThemedView margin>
          {/* Input de nombre */}
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              value={form.name}
              onChangeText={value => setForm({...form, name: value})}
              placeholder='Nombre completo...'
              autoCapitalize='words'
            />
          </ThemedCard>
          {/* Input de email */}
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              value={form.email}
              onChangeText={value => setForm({...form, email: value})}
              placeholder='Correo electrónico...'
              autoCapitalize='none'
              keyboardType='email-address'
            />
          </ThemedCard>
          {/* Input de numero telefonico */}
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              value={form.phone}
              onChangeText={value => setForm({...form, phone: value})}
              placeholder='Número de teléfono...'
              autoCapitalize='words'
              keyboardType='phone-pad'
            />
          </ThemedCard>

          {/* Mostrar formulario */}
          <ThemedCard className='mb-40 mt-40'>
            <ThemedText>
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedView>
            <ThemedTextInput
              value={form.phone}
              onChangeText={value => setForm({...form, phone: value})}
              placeholder='Número de teléfono...'
              autoCapitalize='words'
              keyboardType='phone-pad'
            />
          </ThemedView>
        </ThemedView>

        {/* se renderiza solo en iphone */}
        {isIOS && <View style={{
          height: 100
        }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputsScreen;
